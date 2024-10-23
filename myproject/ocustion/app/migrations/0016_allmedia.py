# Generated by Django 5.0.7 on 2024-08-11 10:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_alter_customer_img_alter_manager_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='AllMedia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_title', models.CharField(max_length=50)),
                ('img', models.FileField(default='media/eventpic/ev1.jpg', upload_to='media/eventpic')),
                ('videofile', models.FileField(blank=True, null=True, upload_to='media/videos', verbose_name='Video File')),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user')),
            ],
        ),
    ]
