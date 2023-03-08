from django.contrib import admin
from .models import *

admin.site.register(City)
admin.site.register(Hotel)
admin.site.register(Restaurant)
admin.site.register(Booking)
admin.site.register(Tour)
admin.site.register(Entertainment)
admin.site.register(BookingRestaurant)
admin.site.register(BookingEntertainment)
