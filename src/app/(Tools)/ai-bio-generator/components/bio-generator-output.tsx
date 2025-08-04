// "use client";

// type Props = {
//   output: string;
//   isLoading:boolean; 
// };

// const BioGeneratorOutput = ({ output,isLoading }: Props) => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">Generated Bio:</h2>
//       <p className="bg-gray-100 p-3 rounded">{isLoading ? 'Generating...':output?.trim()?output: "Your bio will appear here."}</p>
//     </div>
//   );
// };

// export default BioGeneratorOutput;

import React from "react";

type Props = {
  output: string;
  isLoading: boolean;
};

const BioGeneratorOutput: React.FC<Props> = ({ output, isLoading }) => {
  return (
    <div className="mt-4">
      {isLoading ? (
        <p className="bg-yellow-100 p-3 rounded text-yellow-800">Generating...</p>
      ) : (
        <p className="bg-gray-100 p-3 rounded">{output || "Your bio will appear here."}</p>
      )}
    </div>
  );
};

export default BioGeneratorOutput;
