import Guestbook from "../components/guestbook";
import { H1 } from "../components/design/typography";
import Nav from "../components/nav";
import Transition from "../components/transition";
import React from "react";
import prisma from "../utils/prisma";

type GuestbookPageRef = React.ForwardedRef<HTMLDivElement>;

export default function GuestbookPage({ data }, ref: GuestbookPageRef) {
  return (
    <div className="grid justify-center place-items-center">
      <Transition ref={ref}>
        <div className="md:flex mt-32 md:space-x-16 space-y-8 md:space-y-0 mb-16 mx-8">
          <H1 className="max-w-2xl">
            Guestbook -{" "}
            <span className="text-darkGrey">
              Leave a message for me and everyone else who visits this website.
            </span>
          </H1>
          <Guestbook data={data} />
        </div>
      </Transition>
      <Nav />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await prisma.guestbook.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  const serializedData = data.map((data) => {
    return {
      ...data,
      id: data.id.toString(),
      created_at: data.created_at.toISOString(),
    };
  });

  return {
    props: {
      data: serializedData,
    },
  };
}
