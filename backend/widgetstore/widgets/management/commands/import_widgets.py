import json
from django.core.management.base import BaseCommand
from widgets.models import Widget

# Define a custom management command class
class Command(BaseCommand):
    # A brief description of the command's purpose, displayed in help messages
    help = 'Import widgets from a JSON file'

    # The handle method is the entry point for the command when it's executed
    def handle(self, *args, **kwargs):
        # Open the JSON file containing widget data
        with open('widget_data.json') as f:
            # Load the data from the JSON file into a Python list
            widgets_data = json.load(f)

        # Iterate over each item in the list
        for widget_data in widgets_data:
            # Create a new Widget object for each item in the list
            Widget.objects.create(
                name=widget_data['name'],  # Set the 'name' field of the Widget
                price=widget_data['price'],  # Set the 'price' field of the Widget
                description=widget_data['description']  # Set the 'description' field of the Widget
            )
        
        # Output a success message to the console
        self.stdout.write(self.style.SUCCESS('Successfully imported widgets'))
