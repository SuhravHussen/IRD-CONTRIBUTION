import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function SelectOption({ title, selected, setSelected, plans }) {
  return (
    <div className="mb-3">
      <div className="block text-left font-inter font-medium text-base text-title mb-2 capitalize ">{title}</div>
      <div className="">
        <div className="w-full">
          <Listbox value={selected} onChange={(e) => setSelected(e)}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default bg-red-100 text-left focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm focus:outline-none focus:ring-1 focus:ring- px-6 py-[1.125rem] border border-solid   dark:border-none dark:focus:ring-1 dark:focus:ring-">
                <span className="block truncate">{selected ? selected.name : "Choose from your options"}</span>
                <img className="absolute top-6 right-6" src="/assets/others/dropdown.svg" alt="" />
              </Listbox.Button>
              <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="z-10 absolute text-left mt-1 max-h-60 w-full overflow-auto  bg-red-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {plans &&
                    plans.map((plan, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-6 pr-4 ${active ? "bg-[#ddffec] text-black" : "text-gray-900"}`
                        }
                        value={plan}>
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{plan.name}</span>
                        </>
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
}
