function App() {
  return (
    <div className="mt-14 ml-60 text-gray-800 sm:mt-8 sm:mx-3">
      <h1 className="font-play-Fair font-bold text-5xl sm:text-2xl">
        Classic Cheesecake Recipe
      </h1>
      <div className="flex">
        <img src="./6dots.svg" alt="" className="h-3 mt-18" />
        <p className="font-mont font-medium italic text-gray-600 text-sm mt-3 ml-3 w-592 sm:text-xs sm:w-80">
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
      </div>
      <img src="./photo1.png" alt="" className="mt-11 w-969" />
      <div className="flex flex-row sm:flex-col-reverse">
        <div className="flex flex-col text-slate-700 ">
          <h2 className="font-play-Fair font-bold text-2xl mt-12 text-gray-800 sm:mt-8">
            Ingredients
          </h2>
          <h3 className="font-play-Fair italic font-thin text-lg mt-8 sm:mt-3">
            Graham Cracker Crust
          </h3>
          <div className="flex flex-row mt-8 w-530 space-x-3 sm:w-80">
            <div className="flex flex-col  mt-1">
              <input type="checkbox" />
              <input type="checkbox" className="mt-9 sm:mt-6" />
              <input type="checkbox" className="mt-3 sm:mt-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="sm:text-sm">
                1 and 1/2 cups (150g)
                <span className="font-bold text-gray-800">
                  graham cracker crumbs
                </span>
                (about 10 full sheet graham crackers)
              </label>
              <label className="sm:text-sm">
                5 Tablespoons (70g)
                <span className="font-bold text-gray-800">unsalted butter</span>
                , melted
              </label>
              <label className="sm:text-sm">
                1/4 cup (50g)
                <span className="font-bold text-gray-800">
                  granulated sugar
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-216 shadow-md h-367 sm:w-screen sm:h-28 rounded-xl ml-52 mt-12 text-gray-700 sm:shadow-none sm:ml-3 sm:mt-6 overflow-hidden">
          <div className="flex mt-14 mx-11 items-center sm:mt-0 sm:ml-0 overflow-hidden">
            <span className="material-icons text-orange">restaurant_menu</span>
            <div className="flex flex-col ml-2">
              <span className="font-semibold text-gray-300 text-xxs">
                YIELDS
              </span>
              <span className="font-medium text-orange text-sm">
                12 servings
              </span>
            </div>
          </div>
          <div className="sm:flex sm:space-x-3">
            <div className="flex mx-11 mt-11 items-center sm:mt-5 sm:mx-0">
              <span className="material-icons">schedule</span>
              <div className="flex flex-col ml-2">
                <span className="font-semibold text-gray-300 text-xxs">
                  PREP TIME
                </span>
                <span className="font-medium text-sm">45 minutes</span>
              </div>
            </div>
            <div className="flex mx-11 mt-11 items-center sm:mt-5 sm:mx-0">
              <span className="material-icons">schedule</span>
              <div className="flex flex-col ml-2">
                <span className="font-semibold text-gray-300 text-xxs">
                  Cook Time
                </span>
                <span className="font-medium text-sm">1 hour</span>
              </div>
            </div>
            <div className="flex mx-11 mt-11 items-center sm:mt-5 sm:mx-0">
              <span className="material-icons md-48">schedule</span>
              <div className="flex flex-col ml-2">
                <span className="font-semibold text-gray-300 text-xxs">
                  Total Time
                </span>
                <span className="font-medium text-sm">7,75 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-20 w-530 sm:mt-10 sm:w-330">
        <h3 className="font-play-Fair font-normal italic">Cheesecake</h3>
        <div className="flex flex-row mt-8  space-x-3">
          <div className="flex flex-col  mt-1">
            <input type="checkbox" />
            <input type="checkbox" className="mt-9 sm:mt-10" />
            <input type="checkbox" className="mt-2 sm:mt-5" />
            <input type="checkbox" className=" mt-2 sm:mt-9" />
            <input type="checkbox" className="mt-2 sm:mt-5" />
            <input type="checkbox" className="mt-2 sm:mt-10" />
            <input type="checkbox" className="mt-2 sm:mt-5" />
          </div>
          <div className="flex flex-col">
            <label className="sm:text-sm">
              four 8-ounce blocks (904g) full-fat
              <span className="font-bold">cream cheese</span>, softened to room
              temperature
            </label>
            <label className="sm:text-sm sm:mt-3">
              1 cup (200g) <span className="font-bold">granulated sugar</span>
            </label>
            <label className="sm:text-sm sm:mt-3">
              1 cup (240g) full-fat{" "}
              <span className="font-bold">sour cream</span>, at room temperature
            </label>
            <label className="sm:text-sm sm:mt-3">
              1 teaspoon <span className="font-bold">pure vanilla extract</span>
            </label>
            <label className="sm:text-sm sm:mt-3">
              2 teaspoons <span className="font-bold">fresh lemon juice</span>{" "}
              (optional, but recommended)
            </label>
            <label className="sm:text-sm sm:mt-3">
              3 large <span className="font-bold">eggs</span>, at room
              temperature
            </label>
            <label className="sm:text-sm sm:mt-3">
              topping suggestions: salted caramel, lemon curd, strawberry
              topping, chocolate ganache, red wine chocolate ganache, fresh
              fruit, whipped cream, or raspberry sauce (recipe in notes){" "}
            </label>
          </div>
        </div>
      </div>
      <div className="w-530 sm:w-80">
        <h2 className="font-play-Fair text-3xl font-bold sm:text-2xl mt-8 sm:mt-8">
          Instructions
        </h2>
        <div className="flex sm:mt-8">
          <p className="font-play-Fair bg-orange-400 text-white text-2xl px-3 text-center items-center justify-center w-9 h-9 rounded-md MY-0 mx-auto">
            1
          </p>
          <p className="ml-4">
            Adjust the oven rack to the lower-middle position and preheat oven
            to 350°F (177°C).
          </p>
        </div>
        <div className="flex mt-8">
          <p className="font-play-Fair bg-orange-400 text-white text-2xl px-3 items-center justify-center w-9 h-9 rounded-md">
            2
          </p>
          <p className="ml-3">
            Make the crust: Using a food processor, pulse the graham crackers
            into crumbs. Pour into a medium bowl and stir in sugar and melted
            butter until combined. (You can also pulse it all together in the
            food processor.) Mixture will be sandy. Press firmly into the bottom
            and slightly up the sides of a 9-inch or 10-inch springform pan. No
            need to grease the pan first. I use the bottom of a measuring cup to
            pack the crust down tightly. Pre-bake for 8 minutes. Remove from the
            oven and place the hot pan on a large piece of aluminum foil. The
            foil will wrap around the pan for the water bath in step 4. Allow
            crust to slightly cool as you prepare the filling.
          </p>
        </div>
        <div className="flex mt-8">
          <p className="font-play-Fair bg-orange-400 text-white text-2xl px-3 items-center justify-center w-9 h-9 rounded-md">
            3
          </p>
          <p className="ml-3">
            Make the filling: Using a handheld or stand mixer fitted with a
            paddle attachment, beat the cream cheese and granulated sugar
            together on medium-high speed in a large bowl until the mixture is
            smooth and creamy, about 2 minutes. Add the sour cream, vanilla
            extract, and lemon juice then beat until fully combined. On medium
            speed, add the eggs one at a time, beating after each addition until
            just blended. After the final egg is incorporated into the batter,
            stop mixing. To help prevent the cheesecake from deflating and
            cracking as it cools, avoid over-mixing the batter as best you can.
          </p>
        </div>
        <div className="flex mt-8">
          <p className="font-play-Fair bg-orange-400 text-white text-2xl px-3 items-center justify-center w-9 h-9 rounded-md">
            4
          </p>
          <p className="ml-3">
            Prepare the simple water bath (see note) Boil a pot of water. You
            need 1 inch of water in your roasting pan for the water bath, so
            make sure you boil enough. I use an entire kettle of hot water. As
            the water is heating up, wrap the aluminum foil around the
            springform pan. Pour the cheesecake batter on top of the crust. Use
            a rubber spatula or spoon to smooth it into an even layer. Place the
            pan inside of a large roasting pan. Carefully pour the hot water
            inside of the pan and place in the oven. (Or you can place the
            roasting pan in the oven first, then pour the hot water in.
            Whichever is easier for you.)
          </p>
        </div>
        <div className="flex mt-8">
          <p className="font-play-Fair bg-orange-400 text-white text-2xl px-3 items-center justify-center w-9 h-9 rounded-md">
            5
          </p>
          <p className="ml-3">
            Bake cheesecake for 55-70 minutes or until the center is almost set.
            When it's done, the center of the cheesecake will slightly wobble if
            you gently shake the pan. Turn the oven off and open the oven door
            slightly. Let the cheesecake sit in the oven in the water bath as it
            cools down for 1 hour. Remove from the oven and water bath, then
            cool cheesecake completely at room temperature. Then refrigerate the
            cheesecake for at least 4 hours or overnight.
          </p>
        </div>
        <div className="flex mt-8">
          <p className="font-play-Fair bg-orange-400 text-white text-2xl px-3 items-center justify-center w-9 h-9 rounded-md">
            6
          </p>
          <p className="ml-3">
            Use a knife to loosen the chilled cheesecake from the rim of the
            springform pan, then remove the rim. Using a clean sharp knife, cut
            into slices for serving. For neat slices, wipe the knife clean and
            dip into warm water between each slice.
          </p>
        </div>
        <div className="flex mt-8">
          <p className="font-play-Fair bg-orange-400 text-white text-2xl px-3 items-center justify-center w-9 h-9 rounded-md">
            7
          </p>
          <p className="ml-3 ">
            Serve cheesecake with desired toppings. Cover and store leftover
            cheesecake in the refrigerator for up to 5 days.
          </p>
        </div>
      </div>
      <div className="my-14 text-gray-500 sm:text-sm ">
        <p>Source: https://sallysbakingaddiction.com/classic-cheesecake/</p>
      </div>
    </div>
  );
}

export default App;
