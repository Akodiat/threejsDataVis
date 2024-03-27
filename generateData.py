#!/usr/bin/env python3
import argparse


def main(args):
    """ Main entry point of the app """
    print("hello world")
    print(args)


if __name__ == "__main__":
    """ This is executed when run from the command line """
    parser = argparse.ArgumentParser()

    # Add required positional argument
    parser.add_argument("arg", help="Required positional argument")

    args = parser.parse_args()
    main(args)
