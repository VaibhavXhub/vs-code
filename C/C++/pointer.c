#include <stdio.h>
int  main()
{
    int *p ;
    int **q;
    int a ;
    printf("enter the value of a ");
    scanf("%d",&a);
    p=&a;
    q=&p;
    printf("p=%d *p=%d a=%d &a=%d q=%d *q=%d **q=%d", p, *p , a ,&a ,q,*q ,**q);

}