from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from .models import *

def tour_list(request):
    cities = City.objects.all()
    hotels = Hotel.objects.all()
    restaurants = Restaurant.objects.all()
    bookings = Booking.objects.all()
    tours = []

    for city in cities:
        tour = {
            'city': city,
            'hotels': [],
            'restaurants': []
        }
        for hotel in hotels.filter(city=city):
            tour['hotels'].append(hotel)
        for restaurant in restaurants.filter(city=city):
            tour['restaurants'].append(restaurant)
        tours.append(tour)

    context = {
        'tours': tours,
        'bookings': bookings
    }
    return render(request, 'tour_list.html', context)

@login_required
def book_tour(request, tour_id):
    tour = get_object_or_404(Tour, pk=tour_id)
    if request.method == 'POST':
        # Process the form submission
        booking = Booking.objects.create(
            tour=tour,
            user=request.user,
            start_date=request.POST['start_date'],
            end_date=request.POST['end_date'],
            hotel=request.POST['hotel'],
            restaurant=request.POST['restaurant'],
            entertainment=request.POST['entertainment'],
            comments=request.POST['comments']
        )
        # Redirect to a success page or display a success message
        # depending on your application's needs.
        return render(request, 'booking_success.html', {'booking': booking})
    else:
        # Display the booking form
        return render(request, 'book_tour.html', {'tour': tour})
    

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

def login_request(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                form.add_error(None, 'Invalid username or password')
    else:
        form = AuthenticationForm()
    return render(request, 'registration/login.html', {'form': form})

def logout_request(request):
    logout(request)
    return redirect('home')