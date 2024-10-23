# Generated by Django 5.0.7 on 2024-07-14 21:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_created=True)),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=30)),
                ('role', models.CharField(max_length=10)),
                ('is_login', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Manager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company_name', models.CharField(max_length=30)),
                ('Company_details', models.TextField()),
                ('company_location', models.CharField(max_length=30)),
                ('company_city', models.CharField(max_length=30)),
                ('company_address', models.TextField()),
                ('contact_number', models.CharField(max_length=15)),
                ('event_specialization', models.TextField()),
                ('catering_availble', models.BooleanField(default=False)),
                ('budget_amount', models.CharField(max_length=50)),
                ('userid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user')),
            ],
        ),
    ]