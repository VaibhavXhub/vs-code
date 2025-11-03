#include <stdio.h>
 float  Fahrenheit(float  c);
float f=0;
void  main()
{
    float  c;
 printf("enter the temperature in degree celcius");
scanf("%f",c);
Fahrenheit(c);
}
 float  Fahrenheit(float c)
{
 f=((9*c)/5)+32;
printf("Tempeature in Fahrenheit =%f",f);
return 0.0;
}
