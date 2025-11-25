//only to get the knowledge of how struct works in C language 
#include <stdio.h>

struct student// struct is created here 
{
   char name[50];//struct variables 
   int roll;
   int age;
   int classNo;
   int marks;
   float  percentage;
};

int main()
{
    struct student s;// struct variable s is created here
    printf("enter the name of the student\n");
    scanf("%s",s.name);
    printf("enter your university roll no\n");
    scanf("%d",&s.roll);
    printf("enter your age\n");
    scanf("%d",&s.age);
    printf("enter your class\n");
    scanf("%d",&s.classNo);    
    printf("enter your marks out of 500 \n");
    scanf("%d",&s.marks);    
    s.percentage=(s.marks/500.0)*100;// calculating percentage
    printf("the details of the student are as follows\n");
    printf("name=%s\n",s.name);
    printf("roll no=%d\n",s.roll);  
    printf("age=%d\n",s.age);
    printf("class=%d\n",s.classNo);
    printf("marks=%d\n",s.marks);
    printf("percentage=%f\n",s.percentage);
    printf("thank you\n");
    return 0;
}
