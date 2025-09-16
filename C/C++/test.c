int global_variable = 100;
void display_message()
{
    printf("Hello from display message");
}
#include <stdio.h>
extern int global_variable;
extern void display_message();
int main()
{
    printf("%d", global_variable);
    display_message();
}
