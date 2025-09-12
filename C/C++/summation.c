#include <stdio.h>
int summation();
static int sum=0;
static int i;
int main()
{
    printf("enter any ten numbers to be added");
    for(int i=1;i<=10;i++)
    {
        summation();
    }
    printf("tne final sum of the ten numbers=%d",sum);
}
summation()
{
    int number;
    printf("\n\n enter the %d number ",i);
    scanf("%d",&number);
    sum=sum+number;
    return(0);
}