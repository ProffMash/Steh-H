from django.db import models

# Appointments Model
class Appointment(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=15)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return f"Appointment for {self.animal.name} on {self.date}"

# Contacts Model
class Contact(models.Model):
    contact_id = models.AutoField(primary_key=True)
    name=models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name
    