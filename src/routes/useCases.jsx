import { useState } from "react";

export default function UseCases() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedSubtexts, setSelectedSubtexts] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showInitialList, setShowInitialList] = useState(true);

  const availableItems = [
    {
      id: 1,
      text: "Chocolate chip cookies",
      subtexts: [
        "Chocolate chips",
        "Flour",
        "Eggs",
        "Spider eggs",
        "Sugar",
        "More stuff",
      ],
    },
    {
      id: 2,
      text: "Item 2",
      subtexts: [
        "Subtext 1",
        "Subtext 2",
        "Subtext 3",
        "Subtext 4",
        "Subtext 5",
        "Subtext 6",
      ],
    },
    {
      id: 3,
      text: "Item 3",
      subtexts: [
        "Subtext 1",
        "Subtext 2",
        "Subtext 3",
        "Subtext 4",
        "Subtext 5",
        "Subtext 6",
      ],
    },
    {
      id: 4,
      text: "Item 4",
      subtexts: [
        "Subtext 1",
        "Subtext 2",
        "Subtext 3",
        "Subtext 4",
        "Subtext 5",
        "Subtext 6",
      ],
    },
    {
      id: 5,
      text: "Item 5",
      subtexts: [
        "Subtext 1",
        "Subtext 2",
        "Subtext 3",
        "Subtext 4",
        "Subtext 5",
        "Subtext 6",
      ],
    },
    {
      id: 6,
      text: "Item 6",
      subtexts: [
        "Subtext 1",
        "Subtext 2",
        "Subtext 3",
        "Subtext 4",
        "Subtext 5",
        "Subtext 6",
      ],
    },
  ];

  const handleItemSelection = (item) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
      setShowInitialList(false); // hide the initial item list
    }
    setSelectedSubtexts([]);
  };

  const handleSubtextSelection = (subtext) => {
    if (selectedSubtexts.includes(subtext)) {
      setSelectedSubtexts(
        selectedSubtexts.filter(
          (selectedSubtext) => selectedSubtext !== subtext
        )
      );
    } else {
      setSelectedSubtexts([...selectedSubtexts, subtext]);
    }
  };

  const handleSubmit = () => {
    setItems(selectedSubtexts);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Selected Subtexts:</h1>
        <ul className="list-disc pl-8">
          {items.map((item, index) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className="p-8">
        {showInitialList && ( // conditionally render the initial item list
          <ul role="list" className="divide-y divide-gray-100">
            {availableItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {item.text}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    console.log(selectedItems);
                    handleItemSelection(item);
                  }}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        )}
        {!showInitialList && ( // conditionally render the selected item subtext list
          <div className="flex flex-col">
            <ul className="divide-y divide-gray-100">
              {selectedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-x-6 py-5"
                >
                  <ul className="list-disc pl-8">
                    {item.subtexts.map((subtext, index) => (
                      <li key={index} className="mt-2">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {subtext}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            console.log(selectedSubtexts);
                            handleSubtextSelection(subtext);
                          }}
                          className={`rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                            selectedSubtexts.includes(subtext)
                              ? "bg-green-600"
                              : "bg-indigo-600"
                          }`}
                        >
                          Select
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                console.log(selectedSubtexts);
                handleSubmit();
              }}
              className={`flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0`}
            >
              View Selected
            </button>
          </div>
        )}
      </div>
    </>
  );
}
