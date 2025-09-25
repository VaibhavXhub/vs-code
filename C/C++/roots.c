#include <stdio.h>
#include <math.h>
int a,b,c;
int main()
{
printf("enter values of %d , %d and %d",a,b,c);
scanf("%d%d%d",&a,&b,&c);
if(a==0)
{
    printf("not a quadratic equation");
    return 0;
}
int D=(b*b)-4*a*c;
switch(D)
{
    case 0:
    {
        float r1,r2;
        r1=r2=-b/(2*a);
        printf("roots are real and equal %f and %f",r1,r2);
        break;
    }
    case 1:
    {
        float r1,r2;
        r1=(-b+sqrt(D))/(2*a);
        r2=(-b-sqrt(D))/(2*a);
        printf("roots are real and distinct %f and %f",r1,r2);
        break;
    }
    case -1:
    {
        float realpart,imagpart;
        realpart=-b/(2*a);
        imagpart=sqrt(-D)/(2*a);
        printf("roots are complex and imaginary %f+%fi and %f-%fi",realpart,imagpart,realpart,imagpart);
        break;
    }
}


}