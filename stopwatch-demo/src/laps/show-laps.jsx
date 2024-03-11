import TimerText from "../timer/timer-text";
const Laps = ({ laps }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Laps</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((lop, index) => {
            return (
              <tr key={index}>
                <td>
                  <TimerText count={lop} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Laps;
