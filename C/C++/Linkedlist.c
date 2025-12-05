#include <stdio.h>
#include <stdlib.h>
 typedef struct node
{
    int data;
    struct node *link;
}node ;

int main()
{
    node *head;
    node *p;
    node *node1;
    node *node2;
    node *node3;
    node1 = (node *)calloc(1, sizeof(node));
    head = node1;
    node2=(node*) calloc(1,sizeof(node));
    node3=(node*) calloc(1,sizeof(node));
    node1->data=30;
    node1->link=node2;
    node2->data=40;
    node2->link=node3;
    node3->data=50;
    node3->link=NULL;
    p=head;
    while(p!=NULL)
    {
        printf("%d\n", (p->data));
        p=p->link;
    }


        return 0;
}