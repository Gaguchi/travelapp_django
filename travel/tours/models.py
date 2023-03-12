from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

class City(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='city_images', null=True, blank=True)

    def __str__(self):
        return self.name


class Hotel(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    image = models.ImageField(upload_to='hotel_images', null=True, blank=True)

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    cuisine = models.CharField(max_length=100)
    image = models.ImageField(upload_to='restaurant_images', null=True, blank=True)

    def __str__(self):
        return self.name


class Entertainment(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    description = models.TextField()
    image = models.ImageField(upload_to='entertainment_images', null=True, blank=True)

    def __str__(self):
        return self.name


class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    check_in = models.DateField()
    check_out = models.DateField()
    num_adults = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    num_children = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    restaurant_choices = models.ManyToManyField(Restaurant, blank=True, through='BookingRestaurant')
    entertainment_choices = models.ManyToManyField(Entertainment, blank=True, through='BookingEntertainment')

    def __str__(self):
        return f"{self.user}: Booking for {self.num_adults} adults and {self.num_children} children at {self.hotel.name} in {self.hotel.city.name} from {self.check_in} to {self.check_out}"


class BookingRestaurant(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    date = models.DateField()

    def clean(self):
        if self.date < self.booking.check_in or self.date > self.booking.check_out:
            raise ValidationError('Booking day must be within the check-in and check-out dates of the booking')

    def __str__(self):
        return f"BookingRestaurant for {self.restaurant.name} on {self.date}"


class BookingEntertainment(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    entertainment = models.ForeignKey(Entertainment, on_delete=models.CASCADE)
    date = models.DateField()

    def clean(self):
        if self.date < self.booking.check_in or self.date > self.booking.check_out:
            raise ValidationError('Booking day must be within the check-in and check-out dates of the booking')

    def __str__(self):
        return f"BookingEntertainment for {self.entertainment.name} on {self.date}"
    


class Tour(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    description = models.TextField()
    image = models.ImageField(upload_to='tour_images/')
    hotels = models.ManyToManyField(Hotel)
    restaurants = models.ManyToManyField(Restaurant)
    bookings = models.ManyToManyField(Booking, blank=True)

    def __str__(self):
        return self.name