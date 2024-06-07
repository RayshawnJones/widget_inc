import json
from django.core.management.base import BaseCommand
from widgets.models import Widget

class Command(BaseCommand):
    help = 'Import widgets from a JSON file'

    def handle(self, *args, **kwargs):
        with open('widget_data.json') as f:
            widgets_data = json.load(f)

        for widget_data in widgets_data:
            Widget.objects.create(
                name=widget_data['name'],
                price=widget_data['price'],
                description=widget_data['description']
            )
        
        self.stdout.write(self.style.SUCCESS('Successfully imported widgets'))
