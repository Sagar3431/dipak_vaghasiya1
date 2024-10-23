from django.contrib import admin

# Register your models here.

from .models import *


admin.site.register(User)
admin.site.register(Manager)
admin.site.register(Customer)
admin.site.register(AllMedia)
admin.site.register(EventRequest)
admin.site.register(EventReview)
