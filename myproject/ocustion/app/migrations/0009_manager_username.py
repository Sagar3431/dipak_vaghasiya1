# Generated by Django 5.0.7 on 2024-07-18 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_manager_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='manager',
            name='username',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]