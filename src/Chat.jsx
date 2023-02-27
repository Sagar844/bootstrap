import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
export const Chat = () => {
  const [chat, setchat] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 right-0 mx-6 my-8">
        <button
          className="  bg-green-500 rounded-full p-5"
          onClick={() => setchat(!chat)}
        >
          {chat ? (
            <img
              className=""
              src="https://cdn.discordapp.com/attachments/1001168177952211054/1079748652215570432/icons8-chevron-24_1.png"
            />
          ) : (
            <img
              className=""
              src="https://cdn.discordapp.com/attachments/1001168177952211054/1079744235907076226/icons8-chat-room-24.png"
            />
          )}
        </button>
      </div>

      <Transition appear show={chat} as={Fragment}>
        <Dialog as="div" className="" onClose={() => setchat(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div />
          </Transition.Child>

          <div className=" relative  lg:fixed bottom-0 right-0 my-28 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform mx-20  py-48 px-20  rounded-l-lg bg-gradient-to-t from-green-200 to-green-500 opacity-1 shadow-4xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                ></Dialog.Title>
                <div className="">
                  <p className="text-sm text-gray-500"></p>
                </div>

                <div className=" ">
                  <form className="flex flex-col space-y-5 ">
                    <input
                      title=" Start typing "
                      className="px-5 py-1 border-solid rounded-md focus:ring-2  border-2 border-white text-white"
                      placeholder="Start typing to filter..."
                      type="text"
                      name=""
                      id=""
                    />
                    <input
                      title=" Start typing "
                      className="px-5 py-1 border-solid rounded-md focus:ring-2  border-2 border-white text-white"
                      placeholder="Start typing to filter..."
                      type="text"
                      name=""
                      id=""
                    />
                    <input
                      title=" Start typing "
                      className="px-5 py-1 border-solid rounded-md focus:ring-2  border-2 border-white text-white"
                      placeholder="Start typing to filter..."
                      type="text"
                      name=""
                      id=""
                    />
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
