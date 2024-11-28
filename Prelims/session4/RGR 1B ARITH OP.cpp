#include <iostream>
#include <string>

using namespace std;

int main() {
int firstNum = -7, secondNum = 36000;
float thirdNum = -90, fourNum = 24000000;

int remainder = secondNum % firstNum;
float quotient = secondNum / firstNum;
int product = fourNum * thirdNum;
int difference = fourNum - thirdNum;
int sum = firstNum + secondNum;

cout<< "Remainder of "<<thirdNum << " and " << fourNum << " is " << remainder << endl;
cout<< "Quotient of "<<thirdNum << " and " << fourNum << " is " << quotient << endl;
cout<< "Product of "<<thirdNum << " and " << fourNum << " is " << product << endl;
cout<< "Difference of "<<firstNum << " and " << secondNum << " is " << difference << endl;
cout<< "Sum of "<<firstNum << " and " << secondNum << " is " << sum << endl;

return 0;
}