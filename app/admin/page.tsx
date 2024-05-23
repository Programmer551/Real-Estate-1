import TableRow from "@/components/tableRow";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Admin_Pannel = async () => {
  const users = await clerkClient.users.getUserList();

  const { userId } = auth();
  if (userId !== process.env.ADMIN_ID) {
    redirect("/");
  }

  return (
    <section>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type='checkbox'
                    className='checkbox'
                  />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user): React.JSX.Element => {
              return (
                <TableRow
                  key={user.id}
                  {...user}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Admin_Pannel;
