import unittest
import lib.LPStatic as LPStatic
import json
import time
import os
iterations = 100
time_tolerance = 0.05

class TestAPI(unittest.TestCase):
    def setUp(self):
        dirname = os.path.dirname(__file__)
        filename = os.path.join(dirname, 'data/testData.json')
        with open(filename) as file:
            self.testData = json.load(file)

    def test_speed(self):
        ti = time.time()
        for i in range(iterations):
            LPStatic.calculateLinkBudget(self.testData)
        tf = time.time()
        tm = (tf-ti)/iterations
        print("%s iterations took %s seconds (mean: %s seconds)"%(iterations, str(tf-ti), str(tm)))
        self.assertLess(tm, time_tolerance, 'The execution of static link budget took too long on this machine')
        # TODO: Should also test for max value and median values

if __name__ == "__main__":
    unittest.main()
