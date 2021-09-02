package com.company;


import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

//        String str = "word";
//        int num = 15;
//        double numdl = 1234.1234;
//        float numF = 1234.123412f;
//        long numL = 234534252345234L;
//        byte numByte = 123;
//        char strChar = 'e';
//        boolean isFalse = true;

//        int num,top,here;
//        int num;
//        int pop;
        int here;

//        int num =0,top =6,here=4;
        int num1 = 0;
        int pop = 8;
        int here5 = 4;

        String num = "2353425";
        Integer number = 234532;
        Long lnum = 34253253L;


        // just to print
//	System.out.print("Hello, World!\n");
//	// This prints to a new line
//	System.out.println("Changed it up");
//	System.out.print(".....it is working");

        Scanner input = new Scanner(System.in);
        System.out.println("What is your first name? ");
        String firstName = input.nextLine();
        System.out.println("What is your last name?");
        String lastName = input.nextLine();
        System.out.printf("Hello %s %s!\n", firstName, lastName);
        System.out.printf("Goodbye %s, %s!\n", lastName, firstName);


//        System.out.println("Hello, " + firstName);
//        System.out.printf("Hello %s!\n", firstName);
//        System.out.printf("Goodbye %s!\n", firstName);
//        System.out.printf("Goodbye %s!\n", firstName);

    }
}
