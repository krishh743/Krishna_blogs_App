import MetricCard from "@/app/components/cards/MetricCard";
import React from "react";
import { MdAddCircleOutline } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';

function LandingPage() {
  return (
    <><div className="pt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MetricCard
          title="Subscribers"
          value="100%"
          percentage="100%"
          trend="100%"
          trendColor="success"
          trendText="from 0 last (4 weeks)" />

        <MetricCard
          title={'Open Rate'}
          value={'2'}
          percentage={''}
          trend={'100%'}
          trendColor={'danger'}
          trendText={'from 0 last (4 weeks)'} />
        <MetricCard
          title={'Click Rate'}
          value={'0'}
          percentage={''}
          trend={'0%'}
          trendColor={'black'}
          trendText={'from 0 last (4 weeks)'} />
      </div>
    </div><div className="pt-6">
        <div className="flex flex-col items-center justify-center rounded-lg p-6 py-12 border border-[#e2e2e2] bg-[#FDF2F8] text-[#831843]">
          <span className="text-5xl mb-2">
            <MdAddCircleOutline />
          </span>
          <p className="mt-4 text-xl font-semibold mb-1">
            Your have no active subscribers
          </p>
          <p className="text-lg mb-2">
            would you like to start by importing a list
          </p>
          <button className="flex items-center mt-4 py-2 px-4 rounded-lg bg-[#EC4899] text-white text-xl font-semibold">
            <span className="mx-2 ">
              <MdAdd />
            </span>
            Import List
          </button>
        </div>
      </div>

      
      </>
  );
}

export default LandingPage;

