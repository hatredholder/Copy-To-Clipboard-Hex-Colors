from django.views.generic import ListView
from .models import Color


class ColorListView(ListView):
    model = Color
    template_name = 'colors/main.html'