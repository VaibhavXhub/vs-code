#include <stdio.h>
float convert(float x);
int main()
{
float c;
printf("enter the temperature in celcius");
scanf("%f",&c);
convert(c);
}
float convert(float x)
{
float f=((9*x)/5)+32;
printf("output=%f",f);
return(0);
}