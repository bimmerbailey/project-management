export interface TaskData {
  /**
   * Unique ID
   */
  id: number;

  /**
   * Description of task
   */
  label: string;

  /**
   * Person task is assigned to
   */
  user: string;

  /**
   * Start data of project
   */
  start: Date;

  /**
   * Duration of project
   */
  duration: number;

  /**
   * Percent of where task starts
   */
  percent: number;

  /**
   * Either whole porject or milestone
   */
  type: string;

  /**
   * Start out being collapsed (true) or expanded (false)
   */
  collapsed: boolean;

  /**
   * Style of progress bar
   */
  style: {
    base: {
      fill: string, // Will be background color (#000000)
      stroke: string, // Will be stripe color (#000000)
    };
  };
}

export function DefaultProjectData(): TaskData[] {


  return [];
}
