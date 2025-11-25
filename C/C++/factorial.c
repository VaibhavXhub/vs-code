#include <stdio.h>
int factorial(int n)
{
    if(n==0)
    return 1;
    else 
    return n * factorial(n-1);
}
int main()
{
    int n;
    printf("enter the number whose factorial is to be calculated\n");
    scanf("%d",&n);
    int fact=factorial(n);
    printf("the factorial of %d id %d\n",n,fact);
    return 0;

}