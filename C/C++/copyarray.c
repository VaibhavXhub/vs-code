#include <stdio.h>
//copy elements of one array into another array.
int a[10];
int b[10];
int main()
{
    printf("enter the 10 elements of array a\n");
for(int i=0;i<10;i++)
{
    scanf("%d",&a[i]);
}
printf("Elements of array a\n");
for(int i=0;i<10;i++)
{
    b[i]=a[i];
    printf("%d ",a[i]);
}
printf("\nelements of array b\n");
for(int i=0;i<10;i++)
{
    printf("%d ",b[i]);
}
return 0;
}