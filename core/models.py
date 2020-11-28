from django.db import models
from django.contrib.auth.models import AbstractUser


class Gender(models.Model):
    short_name = models.CharField(max_length=5, verbose_name="Nombre corto")
    long_name = models.CharField(max_length=100, verbose_name="Nombre largo")

    def __str__(self) -> str:
        return "{} - {}".format(self.short_name, self.long_name)

    class Meta:
        verbose_name = "Género"
        verbose_name_plural = "Géneros"
        app_label = "core"


class User(AbstractUser):
    bio = models.TextField(max_length=500, blank=True, verbose_name="Biografía")
    location = models.CharField(max_length=100, blank=True, verbose_name="Ubicación geográfica")
    birthdate = models.DateField(null=True, blank=True, verbose_name="Fecha de nacimiento")
    gender = models.ForeignKey(Gender, on_delete=models.SET_DEFAULT, default=1, verbose_name="Género")

    @property
    def fullname(self) -> str:
        return "{} {}".format(self.first_name, self.last_name)

    def __str__(self) -> str:
        return self.fullname

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
        app_label = "core"


class SystemOfMeasurements(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nombre")

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Sistema de medidas"
        verbose_name_plural = "Sistemas de medidas"
        app_label = "core"


class Unit(models.Model):
    name = models.CharField(max_length=40, verbose_name="Nombre")
    system_of_measurements = models.ForeignKey(SystemOfMeasurements, on_delete=models.SET_DEFAULT, default=1,
                                               verbose_name="Sistema de medidas")

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Unidad"
        verbose_name_plural = "Unidades"
        app_label = "core"
