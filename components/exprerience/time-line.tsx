import React from "react";

export const TimeLine = () => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-zinc-200">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-200 dark:bg-zinc-100"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-zinc-400">
            Frebuary 2023 - present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 mb-1">
            Full Stack developer at MxMart
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-dark">
            Led the frontend team in developing an internal project using a
            stack that included React, React Query, Blueprint, Material UI,
            GraphQL and more
          </p>

          <p className="mb-4 text-base font-normal text-gray-500 dark:text-dark">
            Created and designed APIs using AWS Amplify, AWS API Gateway,
            Lambda, both Python and Node.js in multiple projects.
          </p>

          <p className="mb-4 text-base font-normal text-gray-500 dark:text-dark">
            Performed maintenance on an educational portal, utilizing React
            with class based components on the frontend and a Lambdas in S
            erverless F ramework using Node.js on the backend. This involved
            ensuring functionality, performance optimization, and necessary
            improvements for a smooth user experience
          </p>

          <p className="mb-4 text-base font-normal text-gray-500 dark:text-dark">
            Developed a countdown timer for university admission result
            releases, utilizing React on the frontend and AWS API Gateway and
            Lambda with Python on the backend
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-dark">
            Designed and implemented AWS CDK based infrastructure using Python
            to create Step Functions, Lambdas, AWS SQS, DynamoDB tables, and API
            Gateways, integrated with CI/CD pipelines, for utilization within a
            middleware solution.
          </p>
        </li>
      </ol>
    </>
  );
};
