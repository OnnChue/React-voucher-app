import React from "react";
import { HiOutlineDotsHorizontal, HiPlus, HiSave, HiSaveAs, HiSearch, HiViewList } from "react-icons/hi";

const VoucherList = () => {
  return (
    <div>

      <h1 className="text-xl font-bold">Voucher List</h1>
      
      <div className="flex justify-between mb-3">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <HiSearch className="text-gray-500" />
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search Voucher"
                  required
                />
              </div>
              <div className=" ">
                <button
                  type="submit"
                  className="text-white flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create Sale <HiSave />
                </button>
              </div>
            </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-slate-100 ">
            <tr>
              <th scope="col " className="px-6 py-3">
                VOUCHER ID.
              </th>
              <th scope="col" className="px-6 py-3">
                CUSTOMER NAME
              </th>

              <th scope="col" className="px-6 py-3 ">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                DATE
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200 hidden last:table-row">
              <td colSpan={5} className="px-6 py-4 text-center">
                There is no Voucher List
              </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
              <td className="px-6 py-4">1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Kaung Kaung
              </th>

              <td className="px-6 py-4 text-end">
                kaungkaung@gmail.com
              </td>
              <td className="px-6 py-4 text-end">
                <p className="text-xs">8 July 2025</p>
                <p className="text-xs">11:00 AM</p>
              </td>
              <td className="px-6 py-4 ">
                <button className="flex space-x-2 justify-end border p-2 rounded-md shadow-md">
                  <HiOutlineDotsHorizontal />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
