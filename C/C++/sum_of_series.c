// calculating the sum of series [10+9+8+-------+1] using recursion
#include <stdio.h>
int series(int n)
{
     if (n==0)
     return 0;
     else 
     {
        return n+series(n-1);
     }
}
int main()
{
    int a=10;
    int sum=series(a);
    printf("sum of the series=%d",sum);
    return 0;
}