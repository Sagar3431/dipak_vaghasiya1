# Generated by Django 5.0.7 on 2024-07-18 12:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_manager_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='manager',
            old_name='Company_name',
            new_name='companyname',
        ),
    ]