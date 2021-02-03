class MpesaWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker # enables job status tracking
  
  def expiration
    @expiration ||= 60 * 60 * 24 * 30 # 30 days
  end

  def on_complete()
    puts "mpesa complete"
  end

  def perform(*args)
    # Do something
    puts "MPESA is Working"
    batch = Sidekiq::Batch.new
    batch.on(:success, MpesaPushWorker)
    puts batch.bid
    # byebug
    batch.jobs do
      MpesaPushWorker.perform_async
    end
  end

  def on_success(status)
    byebug
    puts "live from callback"
    @room = Room.create(room_name: "dide")
  end
end
