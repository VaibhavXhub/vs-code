#include <stdio.h>
char c;
int main()
{
    printf("Enter an alphabet:");
    scanf("%c",&c);
    if(c=='A'||c=='E'||c=='I'||c=='O'||c=='U'||c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
    printf("%c is an vowel",c);
    else
    printf("%c is an consonent",c);
    return 0;
}