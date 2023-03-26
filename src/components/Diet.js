import React from "react";

import Header from "./Header";
const Diet = () => {
  return (
    <>
      <Header />
      

      <div class="max-w-lg mx-auto mt-10 flex items-center flex-col">
        <h2 class="text-2xl font-bold mb-4">7-Day Healthy Diet Plan</h2>

        <table class="table-auto w-full rounded-lg ...">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-16 py-2 font-bold text-left border">Day</th>
              <th class="px-16 py-2 font-bold text-left border">Breakfast</th>
              <th class="px-16 py-2 font-bold text-left border">
                Mid-morning Snack
              </th>
              <th class="px-16 py-2 font-bold text-left border">Lunch</th>
              <th class="px-16 py-2 font-bold text-left border">
                Evening Snack
              </th>
              <th class="px-16 py-2 font-bold text-left border">Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2 font-medium">Day 1</td>
              <td class="border px-4 py-2">
                Oats porridge with fruits and nuts
              </td>
              <td class="border px-4 py-2">Apple with peanut butter</td>
              <td class="border px-4 py-2">
                Brown rice with dal, vegetables, and a side of salad
              </td>
              <td class="border px-4 py-2">
                Roasted chana with lemon and spices
              </td>
              <td class="border px-4 py-2">
                Grilled chicken with a side of grilled vegetables and a salad
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-medium">Day 2</td>
              <td class="border px-4 py-2">
                Multigrain bread sandwich with egg and vegetables
              </td>
              <td class="border px-4 py-2">Carrot sticks with hummus</td>
              <td class="border px-4 py-2">
                Quinoa salad with chickpeas, vegetables, and a side of soup
              </td>
              <td class="border px-4 py-2">
                Greek yogurt with berries and nuts
              </td>
              <td class="border px-4 py-2">
                Baked salmon with roasted vegetables and a salad
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2 font-medium">Day 3</td>
              <td class="border px-4 py-2">
                Whole grain cereal with milk and fruits
              </td>
              <td class="border px-4 py-2">Pear with almond butter</td>
              <td class="border px-4 py-2">
                Chickpea and spinach curry with brown rice and a side of salad
              </td>
              <td class="border px-4 py-2">
                Roasted peanuts with lemon and spices
              </td>
              <td class="border px-4 py-2">
                Grilled tofu with a side of mixed vegetables and a salad
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-medium">Day 4</td>
              <td class="border px-4 py-2">
                Oats porridge with fruits and nuts
              </td>
              <td class="border px-4 py-2">Apple with peanut butter</td>
              <td class="border px-4 py-2">
                Brown rice with dal, vegetables, and a side of salad
              </td>
              <td class="border px-4 py-2">
                Roasted chana with lemon and spices
              </td>
              <td class="border px-4 py-2">
                Grilled chicken with a side of grilled vegetables and a salad
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2 font-medium">Day 5</td>
              <td class="border px-4 py-2">
                Multigrain bread sandwich with egg and vegetables
              </td>
              <td class="border px-4 py-2">Carrot sticks with hummus</td>
              <td class="border px-4 py-2">
                Quinoa salad with chickpeas, vegetables, and a side of soup
              </td>
              <td class="border px-4 py-2">
                Greek yogurt with berries and nuts
              </td>
              <td class="border px-4 py-2">
                Baked salmon with roasted vegetables and a salad
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-medium">Day 6</td>
              <td class="border px-4 py-2">
                Whole grain cereal with milk and fruits
              </td>
              <td class="border px-4 py-2">Pear with almond butter</td>
              <td class="border px-4 py-2">
                Chickpea and spinach curry with brown rice and a side of salad
              </td>
              <td class="border px-4 py-2">
                Roasted peanuts with lemon and spices
              </td>
              <td class="border px-4 py-2">
                Grilled tofu with a side of mixed vegetables and a salad
              </td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2 font-medium">Day 7</td>
              <td class="border px-4 py-2">
                Oats porridge with fruits and nuts
              </td>
              <td class="border px-4 py-2">Apple with peanut butter</td>
              <td class="border px-4 py-2">
                Brown rice with dal, vegetables, and a side of salad
              </td>
              <td class="border px-4 py-2">
                Roasted chana with lemon and spices
              </td>
              <td class="border px-4 py-2">
                Grilled chicken with a side of grilled vegetables and a salad
              </td>
            </tr>
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Diet;
