import * as GHC from "react-github-calendar";
import { GitCommit } from "lucide-react";

const GitHubCard = () => {
  const GitHubCalendar = GHC.default || GHC.GitHubCalendar || GHC;

  return (
    <div className="github-card p-5 md:col-span-2 w-full">
      <h2 className="github-text text-xl lg:text-2xl flex font-bold mb-4">
        <GitCommit className="about-icon mt-1 mr-2" size={28} />
        Public GitHub Contributions
      </h2>
      <div className="w-full md:[&_.react-activity-calendar\_\_scroll-container]:overflow-visible md:[&_.react-activity-calendar\_\_calendar]:w-full md:[&_.react-activity-calendar\_\_calendar]:h-auto">
        <GitHubCalendar
          username="codewithjelo"
          colorScheme="dark"
          blockRadius={2}
          blockMargin={9}
          blockSize={18}
          fontSize={16}
          theme={{
            dark: [
              "var(--secondary-color)",
              "#f0c4f3",
              "#e89aec",
              "#e270e5",
              "#da6ee2",
            ],
          }}
          style={{
            color: "var(--text-color)",
            width: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default GitHubCard;
