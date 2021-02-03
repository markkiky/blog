class MpesaPushWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker # enables job status tracking

  def perform(*args)
    puts "Mpesa Push"
  end
end
