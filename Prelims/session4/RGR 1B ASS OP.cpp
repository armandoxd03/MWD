#include <iostream>
#include <string>

using namespace std;

int main() {

int secondNum = 36000;
int firstNum = 1000000000;

secondNum -= 20; 
firstNum += 10; 
secondNum *= 50; 
firstNum /= 100; 

cout<< "SecondNum value is now "<< secondNum << endl;
cout<< "firstNum value is now "<< firstNum << endl;

return 0;
}