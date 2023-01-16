import React from 'react';
import Button from '../../elements/Button';


function TableList({ data, ...props }) {
    return (
        <div className='flex justify-center items-center'>
            <table className="table bg-white dark:bg-gray-700 shadow rounded-lg ">
                <thead>
                    <tr className="text-xs">
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            No.
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            Action
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            name
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            username
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            email
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            phone
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            company
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-medium uppercase text-gray-900 dark:text-gray-100">
                            Website
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data !== null && data.map((item, i) => (
                        <tr
                            className="text-gray-700 dark:text-gray-100 text-xs"
                            key={item.id}
                        >
                            <td className="border-b-2 p-4 dark:border-dark-5">{i + 1}</td>
                            <td className="border-b-2 p-4 dark:border-dark-5 min-w-min w-40">
                                <Button
                                    color='yellow'
                                >
                                    Detail
                                </Button>
                            </td>
                            <td className="border-b-2 p-4 dark:border-dark-5 min-w-min w-40">
                                {item.name}
                            </td>
                            <td className="border-b-2 p-4 dark:border-dark-5">
                                {item.username}
                            </td>
                            <td className="border-b-2 p-4 dark:border-dark-5">
                                {item.email}
                            </td>
                            <td className="border-b-2 p-4 dark:border-dark-5 ">
                                {item.phone}
                            </td>
                            <td className="border-b-2 p-4 dark:border-dark-5">
                                {item.website}
                            </td>
                            <td className="border-b-2 p-4 dark:border-dark-5">
                                {item.company.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableList;
