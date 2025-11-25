#include<stdio.h>
int a[10]={20,70,10,10,30,40,50,10,60,10};
int main()
{
    int i,j,count=0;
    printf("Duplicate elements in array are:\n");
    for(i=0;i<10;i++)
    {
        for(j=i+1;j<10;j++)
        {
            if(a[i]==a[j])
            {
                printf("%d\n",a[i]);
                count++;
                break;
            }
        }
    }
    if(count==0)
    {
        printf("No duplicate elements found in the array");
    }
    return 0; 
}