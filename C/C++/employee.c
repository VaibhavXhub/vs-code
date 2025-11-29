#include <stdio.h>
#include <stdlib.h>
// dynamic memory allocation practice
// ABC pvt ltd manages private records of other employees.
// they want to store employee ids and records of their employees dynamically the id can be of any lenth as given by the user
// for three employees, you have to take "length of employee id" as input from user in a length integer variable
// then take employee id as input and display on the screen
// store the employee id in a character array and store it dynamically
// you have to create only one character array dynamically

//  eg. employee 1
//  enter the number of characters in your employee id
//  =8
//  dynamically allocate the character array
//  take input from the user

//  eg. employee 2
//  enter the number of characters in your employee id
//  =10
//  dynamically allocate the character array
//  take input from the user

//  eg. employee 3
//  enter the number of characters in your employee id
//  =20
//  dynamically allocate the character array
//  take input from the user

// START
int length = 0;
char *ptr;
void input_length(int length, char *ptr);
int main()
{
    for (int i = 1; i <= 3; i++)
    {
        printf("enter the length of your employee %d id ", i);
        scanf("%d", &length);
        ptr = (char *)malloc(length * sizeof(char));
        input_length(length, ptr);
        free(ptr);
    }
    return 0;
}
void input_length(int length, char *ptr)
{
    printf("enter the id of the  employee\n");
    for (int i = 0; i < length; i++)
    {
        scanf(" %c", &ptr[i]);
    }
    printf("ID of the employee =");
    for (int i = 0; i < length; i++)
    {
        printf("%c", ptr[i]);
    }
    printf("\n");
}
