import React from "react";

type User = {
  id: number;
  first_name: string;
};

type Address = {
  id: number;
  street_name: string;
};

async function getUser(): Promise<User> {
  const res = await fetch("https://random-data-api.com/api/users/random_user", {
    // cache: "no-store",
    next: { revalidate: 10 },
    //! 10 saniyede bir tekrar istek atar
  });
  return res.json();
}

async function getAddress(): Promise<Address> {
  const res = await fetch("https://random-data-api.com/api/users/random_user", {
    cache: "default",
    //! default olarak aynı sonucu döndürür öncelleğe atılır (caching)
  });
  return res.json();
}

async function DataFetching() {
  const user = await getUser();
  const address = await getAddress();

  return (
    <div className="grid w-screen h-screen place-items-center">
      <h1 className="text-4xl">{user.first_name}</h1>
      <h1 className="text-4xl">{address.address.city}</h1>
    </div>
  );
}

export default DataFetching;
