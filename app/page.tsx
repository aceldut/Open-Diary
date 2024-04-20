
import Wrapper from "@/components/global/Wrapper";
import React from "react";

export default function page(): React.ReactElement {
  return (
    <Wrapper title="HOMEPAGE">
      <div className="grid grid-cols-3 gap-4">
        <div className="card card-body card-bordered shadow-lg bg-base-300
        cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-primary
        hover:scale-105 h-56">
          <div className="flex items-center gap-4">
          <div className="w-50 h-50 rounded-full bg-accent p-2">IMG</div>
          <p className="font-semibold text-md">Username | Email</p>
          </div>
          <p className="overflow-y-auto text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident impedit pariatur, neque vitae cum delectus dolorem recusandae, saepe eveniet at quidem quae natus! Unde sunt quod consectetur ducimus deserunt. Iusto?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo molestias alias facilis nihil architecto reprehenderit mollitia commodi accusantium? Aut vitae soluta expedita corrupti exercitationem! Voluptatum natus perferendis tempore ea animi.</p>
        </div>
      </div>
    </Wrapper>
  );
}
