import React from "react";
import PostContent from "./PostContent";
import { supabase } from "@/utils/supabase";

const CardDiaries = async () => {
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false });

  if (error) return <p>please reload the page...</p>;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data.map((diary) => {
        console.log(diary);
        return (
          <PostContent
            key={diary.id}
            diary_id={diary.id}
            avatar={diary.avatar}
            content={diary.content}
            email={diary.email}
            username={diary.username}
          />
        );
      })}
    </div>
  );
};

export default CardDiaries;
