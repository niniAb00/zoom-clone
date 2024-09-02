"use client";

import Loader from "@/components/ui/Loader";
import MeetingRoome from "@/components/ui/MeetingRoome";
import MeetingSetup from "@/components/ui/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallByid";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params: { id } }: { parmas: { id: string } }) => {
  const { user, isLoaded } = useUser();

  const [isSetupComplete, setisSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);
  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setisSetupComplete} />
          ) : (
            <MeetingRoome />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
