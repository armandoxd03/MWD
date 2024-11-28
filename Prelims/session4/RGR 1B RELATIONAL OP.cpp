#include <iostream>
#include <string>

using namespace std;

int main() {
    bool isLess = (9000000 < 100000000); // Less = true
    bool isGreaterOrEqual = (36 >= 36); // GreaterOrEqual = true
    bool isLessOrEqual = (589 <= 9000000); // LessOrEqual = true
    bool isEqual = (26 == 26); // Equal = true
    bool isNotEqual = (536 != 76); // NotEqual = true
    bool isGreater = (600 > 300); // Greater = true

    cout<< "isLess result is " << isLess<< endl;
    cout<< "isGreaterOrEqual result is " << isGreaterOrEqual << endl;
    cout<< "isLessOrEqual result is " << isLessOrEqual << endl;
    cout<< "isEqual result is " << isEqual << endl;
    cout<< "isNotEqual result is " << isNotEqual << endl;
    cout<< "isGreater result is " << isGreater << endl;

    return 0;
}