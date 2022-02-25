export default class Timer {
  public isRunning: boolean
  public overallTime: number
  public startTime: number

  public constructor() {
    this.isRunning = false
    this.startTime = 0
    this.overallTime = 0
  }

  public _getTimeElapsedSinceLastStart(): number {
    if (!this.startTime) return 0
    return Date.now() - this.startTime
  }

  public getTime(): number {
    if (!this.startTime) return 0
    if (this.isRunning)
      return this.overallTime + this._getTimeElapsedSinceLastStart()
    return this.overallTime
  }

  public reset(): void {
    this.overallTime = 0

    if (this.isRunning) {
      this.startTime = Date.now()
      return
    }

    this.startTime = 0
  }

  public start(): void {
    if (this.isRunning) return console.error('Timer is already running')
    this.isRunning = true
    this.startTime = Date.now()
  }

  public stop(): void {
    if (!this.isRunning) return console.error('Timer is already stopped')
    this.isRunning = false
    this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart()
  }
}
